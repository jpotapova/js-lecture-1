module.exports = {
  searchText: function searchText() {
    var paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    var foundAt = paragraph.search(/[a-z]*/g);
    console.log("Match found at position " + foundAt);
  }
};
