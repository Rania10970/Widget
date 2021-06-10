
require(['https://code.jquery.com/jquery-2.2.4.min.js'] function () {

  widget.body.innerHTML = `
    <div style="float: left;width: 30vw">
      <h3>Controller :</h3><input id="controller" /></br>
      <h3>Method :</h3><input id="method" /></br>
      <h3>PostData :</h3><textarea id="postData" rows="4" cols="50"></textarea></br></br>
      <input id="submit" type="button" value="Submit" />
    </div>
    <div style="float: left;width: 70vw">
      <h3>Result : </h3><textarea id="result" rows="50" cols="130"></textarea></br>
    </div>
  `;

  document.getElementById("submit").addEventListener("click", submit);

  function submit() {
    var controller = document.getElementById("controller").value;
    var method = document.getElementById("method").value;
    var postData = JSON.parse(document.getElementById("postData").value);

    API.call(controller, method, postData, (result) => {
      document.getElementById("result").value = JSON.stringify(result);
    });
  }
});
