export async function getModule() {
    const response = await fetch(`https://emailmodules.azurewebsites.net/harmonyTemplates/components/primaries/p1.1.js`);
    debugger;
    return await response.json();
  }