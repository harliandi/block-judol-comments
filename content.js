// Regular expression to match usernames in the format "@randomname-xxx"
// where "randomname" is one or more letters and "xxx" is a combination of letters and numbers.
const blockedPattern = /^@[A-Za-z]+(?:-[A-Za-z]+)*-[A-Za-z0-9]+$/;

function hideBlockedComments() {
  // Select comment elements on a Shorts page.
  // Comments might be rendered as 'ytd-comment-thread-renderer' or 'ytd-comment-renderer'
  const commentElements = document.querySelectorAll('ytd-comment-thread-renderer, ytd-comment-renderer');
  
  for (const comment of commentElements) {
    // Try to find the username element using common selectors.
    const authorElement = comment.querySelector('a#author-text span') ||
                        comment.querySelector('a#author-text') ||
                        comment.querySelector('#author-text');
    
    if (authorElement) {
      const username = authorElement.textContent.trim();
      if (blockedPattern.test(username)) {
        // Hide the comment if the username matches the specified pattern.
        comment.style.display = 'none';
      }
    }
  };
}

// Run the function on initial page load.
hideBlockedComments();

// Use a MutationObserver to hide new comments loaded dynamically.
const observer = new MutationObserver(() => {
  hideBlockedComments();
});

observer.observe(document.body, { childList: true, subtree: true });
