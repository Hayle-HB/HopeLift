$FILE = "text.md"  # Change this to the file you want to update

$startDate = Get-Date "2025-01-29"
$endDate = Get-Date "2025-02-28"

while ($startDate -le $endDate) {
    $dateString = $startDate.ToString("yyyy-MM-dd")
    
    "Update for $dateString" | Out-File -Append -Encoding utf8 $FILE
    git add .
    git commit -m "m"
    git push origin main  # Change 'main' if your branch is different
    
    $startDate = $startDate.AddDays(1)  # Move to the next day
}
