// function to generate markdown for README
function generateMarkdown(data) {
  const badgeColors = {
    "MIT License": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=plastic.svg)](https://opensource.org/licenses/MIT)",
    "GNU Lesser General Public License v3.0": "[![License: LGPL 3.0](https://img.shields.io/badge/License-LGPL%203.0-blue?style=plastic.svg)](https://www.gnu.org/licenses/lgpl-3.0)",
    "Mozilla Public License 2.0": "[![License: MPL v2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen?style=plastic.svg)](https://opensource.org/licenses/MPL-2.0.html)",
    "GNU Affero General Public License v3.0": "[![License: AGPL v3.0](https://img.shields.io/badge/License-AGPL%20v3-red?style=plastic.svg)](https://www.opensource.org/licenses/AGPL-3.0)",
    "The Unlicense": "[![License: Unlicense](https://img.shields.io/badge/License-Unlicense-blue?style=plastic.svg)](http://unlicense.org/)",
    "Apache License 2.0": "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-orange?style=plastic.svg)](https://www.opensource.org/licenses/Apache-2.0)",
    "GNU General Public License v3.0": "[![License: GPL v3.0](https://img.shields.io/badge/License-GPLv3-blue?style=plastic.svg)](https://www.gnu.org/licenses/gpl-3.0)",
  }
  return `
  # ${data.title}

  ${badgeColors[data.license]}

  ## Description

  ${data.description}

  ## Table of Contents

  *[Installation](#installation)

  *[Usage](#usage)

  *[License](#license)

  *[Contribution](#contribution)

  *[Tests](#tests)

  *[Questions](#questions)

  ## Installation

  Please install the following dependencies by running:

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${data.license}

  ## Contributors

  ${data.contributions}

  ## Tests

  ${data.tests}

  ## Questions

  For any questions, you can visit the [GitHub page](https://github.com/${data.username}/${data.title}).
  Or email directly to [email](mailto:${data.email}).


`;
}

module.exports = generateMarkdown;
