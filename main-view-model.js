var viewModel;
var Observable = require("data/observable").Observable;
viewModel = new Observable({
    counter: 42,
    message: "",
    tapAction: function () {
        this.counter--;
        if (this.counter <= 0) {
            this.set("message", "Hoorraaay! You unlocked the NativeScript clicker achievement!");
        } else {
            this.set("message", this.counter + " taps left");
        }
    }
});

module.exports = viewModel;
