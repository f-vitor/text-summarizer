chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getSummary") {
      let paragraphs = document.querySelectorAll("p");
      let fullText = Array.from(paragraphs).map(p => p.innerText).join("\n");
      let sentences = fullText.split(". ");
      let summary = sentences.slice(0, Math.min(sentences.length, 5)).join(". ") + ".";
      sendResponse({summary: summary});
    }
  });
