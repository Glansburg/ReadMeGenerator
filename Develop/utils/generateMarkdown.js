// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `https://github.com/license-badge/${license}/rensderbadge.com`
}

// TODO: Create a function that returns the license link //test test
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title} 
  ## ${data.description}
  ## ${data.installation}
  ## ${data.usage}
  ## ${renderLicenseBadge(data.license)}
  ## ${data.contributing}
  ## ${data.tests}
  ## ${data.questions}
          ` ;
}

module.exports = generateMarkdown;
