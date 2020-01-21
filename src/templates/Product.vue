<template>
  <h1>{{ $page.product.title }}</h1>
</template>

<page-query>
query($path: String!) {
  product(path: $path) {
    title
  }
}
</page-query>
