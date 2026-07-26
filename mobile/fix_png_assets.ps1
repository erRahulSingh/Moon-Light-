Add-Type -AssemblyName System.Drawing

$assetsDir = Join-Path $PSScriptRoot "assets"
Write-Host "Processing assets in $assetsDir..."

Get-ChildItem -Path $assetsDir -Filter "*.png" | ForEach-Object {
    $filePath = $_.FullName
    $tempPath = "$filePath.tmp.png"
    try {
        $bytes = [System.IO.File]::ReadAllBytes($filePath)
        $ms = New-Object System.IO.MemoryStream(,$bytes)
        $img = [System.Drawing.Image]::FromStream($ms)
        
        $img.Save($tempPath, [System.Drawing.Imaging.ImageFormat]::Png)
        $img.Dispose()
        $ms.Dispose()
        
        Remove-Item -Path $filePath -Force
        Move-Item -Path $tempPath -Destination $filePath -Force
        Write-Host "✅ Successfully re-encoded to strict PNG: $($_.Name)"
    } catch {
        Write-Host "❌ Error processing $($_.Name): $_"
        if (Test-Path $tempPath) { Remove-Item -Path $tempPath -Force }
    }
}
