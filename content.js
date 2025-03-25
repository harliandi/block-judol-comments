function containsNonAscii(text) {
  // Check if any character has a char code greater than 127
  for (let i = 0; i < text.length; i++) {
    if (text.charCodeAt(i) > 127) {
      return true;
    }
  }
  return false;
}

function hideUnicodeComments() {
  // Select each comment thread renderer
  const commentThreads = document.querySelectorAll(
    "ytd-comment-thread-renderer"
  );
  console.log(`Found ${commentThreads.length} comment thread(s).`);
  for (const thread of commentThreads) {
    // Locate the span element that holds the comment text inside #content-text
    const commentSpan = thread.querySelector(
      "yt-attributed-string#content-text"
    );
    if (commentSpan) {
      const text = commentSpan.innerText || "";
      // If the comment contains non-ASCII Unicode, hide the entire thread
      if (containsNonAscii(text)) {
        thread.style.display = "none";
      }
    }
  }
}

// Run the function once to process current comments
hideUnicodeComments();

// Optional: observe dynamic changes (for instance, if YouTube loads more comments dynamically)
const observer = new MutationObserver(() => {
  hideUnicodeComments();
});
observer.observe(document.body, { childList: true, subtree: true });
