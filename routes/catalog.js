var express = require('express');
var router = express.Router();

/* GET Catalog listing. */
router.get('/:step', function(req, res) {
  const step=req.params.step;
  var data
  switch(step){
    case "orden de compra":
      data={"step":"Solicitud pago"}
    break
    case "Solicitud pago":
      data={"step":"Facturacion"}
    break
    default:
      data={"step":"orden de compra"}
    break
  }
 
  res.json(data);
});

module.exports = router;
