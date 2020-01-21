<template>
  <div>{{ $static.metadata.siteName }} {{ $static.metadata.siteUrl }}</div>
</template>

<static-query>
query Metadata {
  metadata {
    siteName
    siteUrl
  }
}
</static-query>
