<template>
  <VButton
    size="large"
    variant="full"
    type="button"
    :disabled="isFetching"
    @click="onLoadMore"
  >
    {{ buttonLabel }}
  </VButton>
</template>
<script>
import { computed, defineComponent, useContext } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'VLoadMore',
  props: {
    isFetching: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, { emit }) {
    const { i18n } = useContext()

    const buttonLabel = computed(() => {
      return i18n.t('browse-page.load')
    })

    const onLoadMore = () => {
      emit('onLoadMore')
    }

    return {
      buttonLabel,
      onLoadMore,
    }
  },
})
</script>