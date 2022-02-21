<template>
  <VItem
    :selected="selected"
    :is-first="itemId === 0"
    @click.native="$emit('click', item)"
  >
    <div class="flex flex-row items-center">
      <VIcon :icon-path="icon" class="me-2 my-2" />
      <span class="pe-20 font-semibold">{{ $t(`search-type.${item}`) }}</span>
      <VPill v-if="status === 'beta'">{{
        $t('search-type.status-beta')
      }}</VPill>
    </div>
  </VItem>
</template>

<script>
import { computed } from '@nuxtjs/composition-api'
import { defineComponent } from '@vue/composition-api'
import { contentStatus } from '~/constants/media'
/** @typedef {import('@nuxtjs/composition-api').ExtractPropTypes<typeof propTypes>} Props */
const propTypes = {
  item: { type: String, required: true },
  itemId: { type: Number, required: true },
  selected: { type: Boolean, default: false },
  icon: { type: String, required: true },
}
export default defineComponent({
  name: 'VSearchTypeItem',
  props: propTypes,
  setup(props) {
    const status = computed(() => {
      return contentStatus[props.item]
    })
    return {
      status,
    }
  },
})
</script>