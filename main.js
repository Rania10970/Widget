require(["DSx/Helpers/API"], function (API) {
   var i = 0;
 
            function addKid()
            {
                if (i < 5)
                {
                    var newRow = document.createElement('tr');
 
                    newRow.innerHTML = '<td> <input type="text" name="Designation_'+i+'" ><td> <input type="text" name="Serie_'+i+'" ></td><td><input type="text" name="Quantite_'+i+'" ></td><td><input type="button" id="add_kid()" onClick="addKid()" value="+" /><input type="button" value="-" onclick="removeKid(this.parentNode)"></td>';
 
                    document.getElementById('kids').appendChild(newRow);
                    i++;
                }
            }
 
            function removeKid(element)
            {
                document.getElementById('kids').removeChild(element.parentNode);
                i--;
            }
 
  widget.body.innerHTML = `
 <table border="1" id="kids">
            <tr>
                <th>Désignation</th>
                <th>Série</th>
                <th>Quantité</th>
            </tr>
            <tbody  >
                <tr >
                    <td  >
                        <input type="text" name="Designation">
                    </td>
                    <td>
                        <input type="text" name="Serie">
                    </td>
                    <td>
                        <input type="text" name="Quantite">
                    </td>
                    <td>
                        <input type="button" id="add_kid()" onClick="addKid()" value="+" />
                    </td>
                </tr>
            </tbody>
        </table>
  `;


    });
  }
});
