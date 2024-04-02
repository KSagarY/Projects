const input = document.querySelector("textarea");
const wordCount = document.querySelector("[data-word-count]");
const characterCount = document.querySelector("[data-character-count]");
const sentenceCount = document.querySelector("[data-sentence-count]");
const paragraphCount = document.querySelector("[data-paragraph-count]");

input.addEventListener("input", () => {
  //check if the textarea has the input or not
  if (input.value) {
    // by using the split method split the word and store it in the array
    const wordsArr = input.value.split(" ").filter((word) => word !== "");
    // store the lenght of the array in the ineertext of the word count element
    wordCount.innerText = wordsArr.length;
    //storing the character lenght in the character element innertext
    characterCount.innerText = input.value.length;
    //sentence counter
    const sentenceArr = input.value.split(/[.!]/);
    sentenceCount = sentenceArr.length - 1;
    const paragraphArray = input.value
      .split("\n")
      .filter((p) => p.trim() !== "");
    paragraphCount.innerText = paragraphArray.length;
  } else {
    wordCount.innerText =
      characterCount.innerText =
      wordCount.innerText =
      paragraphCount.innerText =
      sentenceCount =
        0;
  }
});
