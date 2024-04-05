<script>
    import "@appwrite.io/pink";
    import { user } from "$lib/user.js";
	import { onMount } from "svelte";

    onMount(async () => {
        user.logout();
    });
</script>

<slot />