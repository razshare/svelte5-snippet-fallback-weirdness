<script>
  /**
   * @typedef Props
   * @property {import("svelte").Snippet|false} children
   */

  /** @type {Props} */
  let { children = false } = $props()
</script>

<button
  class="rounded-xl border border-emerald-900 bg-emerald-950 px-4 py-2 text-sm font-medium text-emerald-500"
>
  {#if children}
    {@render children()}
  {/if}
</button>
