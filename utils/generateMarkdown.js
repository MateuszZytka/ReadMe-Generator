// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const fs = require("fs")

function renderLicenseBadge(License) {
  if (License == "MIT"){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]"
  } else if (License == "ISC"){
    return  "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]"
  } else if (License == "Mozilla"){
    return  "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]"
  } else if (License == "No License"){
    return "No license chosen"
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(License) {
  if (License == "MIT"){
      return "https://opensource.org/licenses/MIT"
  } else if (License == "ISC"){
    return "https://opensource.org/licenses/ISC"
  } else if (License == "Mozilla"){
    return  "(https://opensource.org/licenses/MPL-2.0)"
  } else if (License == "No License"){
    return "No licenses added"
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(License) {
  if (License == "MIT"){
    return "Copyright <YEAR> <COPYRIGHT HOLDER>\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE."
  } else if (License == "ISC"){
    return "Copyright <YEAR> <OWNER>\n Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.\n THE SOFTWARE IS PROVIDED \"AS IS\" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE."
  } else if (License == "Mozilla"){
    return "Each Contributor hereby grants You a world-wide, royalty-free, non-exclusive license \n\n 1. under intellectual property rights (other than patent or trademark) Licensable by such Contributor to use, reproduce, make available, modify, display, perform, distribute, and otherwise exploit its Contributions, either on an unmodified basis, with Modifications, or as part of a Larger Work; and \n\n 2.under Patent Claims of such Contributor to make, use, sell, offer for sale, have made, import, and otherwise transfer either its Contributions or its Contributor Version."
  } else if (License == "No License"){
    return "No licenses added"
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({ Title, Description, Installation, Usage, Credits, Contribution, Test, License}) {
  return `# ${Title}

## Description
  
${Description}
  
## Installation
  
${Installation}
  
## Usage

${Usage}

## Credits

${Credits}

## License
${License}

${renderLicenseLink(License)}

${renderLicenseSection(License)}

## Badges

${renderLicenseBadge(License)}

## How to Contribute

${Contribution}

## Tests

${Test}`;
}

module.exports = generateMarkdown
