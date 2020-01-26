<template>
  <app-shell>
    <q-precious-stones />
    <q-semi-precious-stones />
    <q-fossil />
    <q-rares />
    <q-others />
  </app-shell>
</template>

<script>
import QPreciousStones from "../components/QPreciousStones";
import QSemiPreciousStones from "../components/QSemiPreciousStones";
import QFossil from "../components/QFossil";
import QRares from "../components/QRares";
import QOthers from "../components/QOthers";

export default {
  components: {
    QSemiPreciousStones,
    QPreciousStones,
    QFossil,
    QRares,
    QOthers
  }
};
</script>
