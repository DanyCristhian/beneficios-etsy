$(function () {
  const card = $('#card-calcula-ganancia-id');
  const boton = $('#boton-calcula-ganancia-id');
  const botonX = $('#cerrar-card-calcula-ganancia-id');
  const calcular = $('#calcular-ganancias-input');
  boton.show('slow');

  function hideCard() {
    card.hide('slow');
    boton.show('slow');
  }

  function showCard() {
    boton.hide('slow');
    card.show('slow');
  }

  boton.click(function () { showCard() })
  botonX.click(function () { hideCard() })

  $(document).keyup(function (e) { if (e.key === 'Escape') hideCard() });

  calcular.on('input', function () {
    const precio = $(this).val();
    const dolar = 20.64;
    const costoAnuncio = 0.20 * dolar;
    const costoTransaccion = (precio * 6.5) / 100;

    if (precio == '' || precio == null || precio == undefined) {
      $('#resultado-costo-anuncio').html('-');
      $('#resultado-costo-transaccion').html('-');
      $('#resultado-calculadora').html('-');
    } else {
      $('#resultado-costo-anuncio').html(`$ ${costoAnuncio}`);
      $('#resultado-costo-transaccion').html(`$ ${costoTransaccion}`);
      $('#resultado-calculadora').html(`Ganancia aproximada de: <b style="color: #f1641e;">$${precio - costoAnuncio - costoTransaccion}</b>`);
    }
  });
});