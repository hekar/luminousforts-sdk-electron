<template>
  <svg
    stroke="black"
    fill="white"
    :width="width"
    :height="height"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
  <g>
    <rect
      y="1.879681"
      x="1.9534023"
      height="12.036263"
      width="2.0214746" />
    <rect
      y="11.794399"
      x="3.9355807"
      height="2.1221235"
      width="6.0260615" />
    <rect
      y="1.8920995"
      x="7.9449863"
      height="10.065925"
      width="2.0214748" />
    <rect
      y="6.8946781"
      x="9.9164286"
      height="2.021349"
      width="3.0370996" />
    <rect
      y="1.8955755"
      x="9.8877001"
      height="2.0095088"
      width="5.0605369" />
  </g>
  </svg>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: '32'
    },
    height: {
      type: String,
      default: '32'
    }
  }
}
</script>
