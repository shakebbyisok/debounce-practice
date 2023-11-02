
# Manual d'Usuari per al Programa de Línia de Comandes amb `debounce`

## Descripció General

Aquest programa de línia de comandes utilitza la funció `debounce` per a controlar la freqüència de les crides de funcions. Es tracta d'una eina que executa una funció només una vegada, després d'esperar un període de temps determinat sense que es produeixin noves crides.

## Execució del Programa

En iniciar el programa, es crearà una interfície de línia de comandes que espera entrades de l'usuari.

## Entrada de Dades

L'usuari pot introduir dades en qualsevol moment prement Enter després de la seva entrada. Aquesta acció desencadenarà la funció `debounce`.

## Funcionament de `debounce`

La funció `debounce` està configurada per a executar-se amb un retard de 1000 mil·lisegons (1 segon) després de l'última entrada. Això significa que:

1. Quan es rebi una entrada, es mostrarà immediatament "Received: [entrada de l'usuari]".
2. Si es produeixen entrades múltiples en un període de 1 segon, la funció `debounce` reiniciarà el seu temporitzador cada vegada.
3. La frase "Function executed!" només s'imprimirà quan hagi passat 1 segon sense rebre noves entrades.

## Finalització del Programa

El programa continuarà executant-se i esperant entrades fins que l'usuari aturi manualment el procés (per exemple, amb `Ctrl + C` en la majoria dels terminals).
