import emojiList from "./emojiList.json";
/**
export default function filterEmoji(searchText, maxResults) {
  return emojiList
    .filter(emoji => {
      if (emoji.title.toLowerCase().includes(searchText.toLowerCase())) {
        return true;
      }
      if (emoji.keywords.includes(searchText)) {
        return true;
      }
      return false;
    })
    .slice(0, maxResults);
}
**/

export default function filterEmoji(searchText, maxResults) {
return emojiList.filter(emoji => {
  var searchArray = searchText.split(" ", 3);
  if (emoji.title.toLowerCase().includes(searchArray[0]) || emoji.title.toLowerCase().includes(searchArray[1]) ){
    return true;
  }
  //if (emoji.keywords.includes(searchArray[0] || searchArray[1])) {
  //  return true;
  //}
  return false;
});
}
