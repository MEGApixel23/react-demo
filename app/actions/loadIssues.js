export function loadIssues() {
  return {
    type: 'PROMISE',
    actions: ['ISSUES_LOADING', 'ISSUES_LOADED', 'ISSUES_LOAD_FAILURE'],
    promise: fetch('https://api.github.com/repos/octocat/Hello-World/issues').then((res) => {
      return res.json();
    })
  };
}

export const clearIssues = () => ({type: 'CLEAR_ISSUES'});