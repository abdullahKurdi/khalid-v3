# PowerShell script to rename WhatsApp images to expected filenames
Set-Location "imgs"

# Get all WhatsApp images
$images = Get-ChildItem "WhatsApp Image*.jpeg" | Sort-Object Name

# Expected filenames based on website requirements
$expectedNames = @(
    "sacred-heritage.jpg",
    "rhythm-letters.jpg", 
    "golden-proportions.jpg",
    "contemporary-echoes.jpg",
    "abstract-letters.jpg",
    "heritage-reimagined.jpg",
    "poetic-forms.jpg",
    "vibrant-voices.jpg",
    "cultural-dialogue.jpg",
    "modern-legacy.jpg",
    "timeless-beauty.jpg",
    "art-vision-gallery.jpg",
    "london-workshop.jpg"
)

# Rename files
for ($i = 0; $i -lt [Math]::Min($images.Count, $expectedNames.Count); $i++) {
    $oldName = $images[$i].Name
    $newName = $expectedNames[$i]
    
    if (Test-Path $newName) {
        Write-Host "File $newName already exists, skipping..."
        continue
    }
    
    Rename-Item -Path $oldName -NewName $newName
    Write-Host "Renamed: $oldName -> $newName"
}

Write-Host "Image renaming completed!"
Write-Host "Remaining files:"
Get-ChildItem "*.jpeg" | ForEach-Object { Write-Host "  - $($_.Name)" }
