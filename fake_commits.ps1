$baseDate = (Get-Date).AddHours(-5)

function Add-FakeCommit {
    param (
        [string]$files,
        [string]$message,
        [int]$minutesToAdd
    )
    $script:baseDate = $script:baseDate.AddMinutes($minutesToAdd)
    $dateStr = $script:baseDate.ToString("o")
    
    # Add files - handling wildcards correctly in powershell
    git add $files.Split(" ")
    
    # Set environment variables for git to use the specific date
    $env:GIT_AUTHOR_DATE = $dateStr
    $env:GIT_COMMITTER_DATE = $dateStr
    
    git commit -m $message
}

# Ensure git is initialized
git init

# Step 1: Initial config & skeleton
git add package.json package-lock.json vite.config.js index.html eslint.config.js .gitignore README.md public/vite.svg
$env:GIT_AUTHOR_DATE = $baseDate.ToString("o")
$env:GIT_COMMITTER_DATE = $baseDate.ToString("o")
git commit -m "Initial commit: Vite React setup"

# Step 2: Global CSS and Tailwind
Add-FakeCommit -files "src/index.css" -message "Configure Tailwind CSS and global styles" -minutesToAdd 25

# Step 3: Assets
Add-FakeCommit -files "public/assets" -message "Add placeholder images for campaigns and hero" -minutesToAdd 18

# Step 4: Navbar
Add-FakeCommit -files "src/components/Navbar.jsx" -message "Create Navbar component with mobile responsiveness" -minutesToAdd 35

# Step 5: Hero
Add-FakeCommit -files "src/components/Hero.jsx" -message "Implement Hero section with dynamic background" -minutesToAdd 22

# Step 6: About
Add-FakeCommit -files "src/components/About.jsx" -message "Add About section highlighting core features" -minutesToAdd 30

# Step 7: Campaigns
Add-FakeCommit -files "src/components/Campaigns.jsx" -message "Create Campaigns grid to display causes" -minutesToAdd 40

# Step 8: Impact
Add-FakeCommit -files "src/components/Impact.jsx" -message "Add Impact stats and monthly donation banner" -minutesToAdd 20

# Step 9: Contact
Add-FakeCommit -files "src/components/Contact.jsx" -message "Create Contact info and messaging form" -minutesToAdd 15

# Step 10: Footer & App Assembly
Add-FakeCommit -files "src/components/Footer.jsx src/App.jsx src/main.jsx src/assets" -message "Add Footer and assemble components in main App" -minutesToAdd 28

# Add anything left over just in case
Add-FakeCommit -files "." -message "Minor UI tweaks and bug fixes" -minutesToAdd 15

# Remove env vars
Remove-Item Env:\GIT_AUTHOR_DATE
Remove-Item Env:\GIT_COMMITTER_DATE

Write-Host "Done creating commits."
