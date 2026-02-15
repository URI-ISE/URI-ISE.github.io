#!/usr/bin/env pwsh
# Build and deploy all projects to GitHub Pages

Write-Host "=== URI-ISE GitHub Pages Build Script ===" -ForegroundColor Cyan

$basePath = "c:\Users\lukep\Documents\URI-ISE"
$gitHubPagesPath = "$basePath\URI-ISE.github.io"

# Function to build a project
function Build-Project {
    param(
        [string]$projectName,
        [string]$projectPath,
        [string]$deployPath
    )
    
    Write-Host "`n[BUILD] $projectName" -ForegroundColor Yellow
    
    if (-not (Test-Path $projectPath)) {
        Write-Host "ERROR: $projectPath not found" -ForegroundColor Red
        return $false
    }
    
    Push-Location $projectPath
    
    try {
        # Install dependencies
        Write-Host "Installing dependencies..." -ForegroundColor Gray
        npm install 2>&1 | Out-Null
        
        # Build
        Write-Host "Building..." -ForegroundColor Gray
        npm run build 2>&1 | Out-Null
        
        if ($LASTEXITCODE -eq 0) {
            Write-Host "Build successful!" -ForegroundColor Green
            
            # Find dist or build folder
            if (Test-Path "dist") {
                $sourcePath = "dist\*"
            } elseif (Test-Path "build") {
                $sourcePath = "build\*"
            } else {
                Write-Host "ERROR: No dist or build folder found" -ForegroundColor Red
                return $false
            }
            
            # Create deploy path if it doesn't exist
            if (-not (Test-Path $deployPath)) {
                New-Item -ItemType Directory -Path $deployPath -Force | Out-Null
            }
            
            # Copy files
            Write-Host "Deploying to $deployPath..." -ForegroundColor Gray
            Remove-Item "$deployPath\*" -Recurse -Force -ErrorAction SilentlyContinue
            Copy-Item $sourcePath $deployPath -Recurse -Force
            Write-Host "Deployed!" -ForegroundColor Green
            return $true
        } else {
            Write-Host "Build failed!" -ForegroundColor Red
            return $false
        }
    } finally {
        Pop-Location
    }
}

# Build RSVP Reading
$rsvpSuccess = Build-Project `
    "RSVP Reading" `
    "$basePath\RSVP-Reading" `
    "$gitHubPagesPath\rsvp-reading"

# Build Hanoi Algorithms (if it has a frontend)
# Hanoi is Python, so skip for now

Write-Host "`n=== Summary ===" -ForegroundColor Cyan
if ($rsvpSuccess) {
    Write-Host "✓ RSVP Reading built successfully" -ForegroundColor Green
} else {
    Write-Host "✗ RSVP Reading build failed" -ForegroundColor Red
}

Write-Host "`nNext steps:" -ForegroundColor Yellow
Write-Host "1. Test locally: python -m http.server 8000"
Write-Host "2. Visit: http://localhost:8000"
Write-Host "3. Commit and push: git add . && git commit -m 'Deploy' && git push"
