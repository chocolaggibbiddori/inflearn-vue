<template>
  <div>
    <canvas ref="lineChart"></canvas>
  </div>
</template>

<script>
export default {
  mounted() {
    const ctx = this.$refs.lineChart.getContext('2d');

    new this.$_Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr'],
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            borderColor: 'rgba(0, 0, 0, 0.2)',
            data: [0, 10, 5, 2]
          }
        ]
      }
    });
  }
};
</script>

<style scoped></style>
