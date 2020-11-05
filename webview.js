// Element integration
module.exports = (Franz) => {
  function getMessages() {
    let direct = 0;
    let indirect = 0;
    const FranzData = document.querySelector('#FranzMessages').dataset;
    if (FranzData) {
      direct = FranzData.direct;
      indirect = FranzData.indirect;
    }

    Franz.setBadge(direct, indirect);
  }

  Franz.loop(getMessages);
  Franz.injectCSS(_path.default.join(__dirname, 'service.css'));
}
