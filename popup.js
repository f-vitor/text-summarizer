document.getElementById("summarizeBtn").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript(
        {
          target: { tabId: tabs[0].id },
          function: summarizePageText
        },
        (result) => {
          document.getElementById("summary").innerText = result[0].result;
        }
      );
    });
  });
  
  function summarizePageText() {
    let paragraphs = document.querySelectorAll("p");
    let fullText = Array.from(paragraphs).map(p => p.innerText).join("\n");
    
    let sentences = fullText.split(". ");
    let summary = sentences.slice(0, Math.min(sentences.length, 5)).join(". ") + ".";
    
    return summary;
  }
  
