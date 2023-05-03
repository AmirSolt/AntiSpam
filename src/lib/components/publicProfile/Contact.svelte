<script lang="ts">


    export let editorMode = false;
    export let config;

    let currency = '$';


</script>


<label class="label">
	<span>Textarea</span>
	<textarea class="textarea" rows="4" placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
</label>

<button type="button" class="btn variant-filled">
	<span>(icon)</span>
	<span>Submit {currency}{config.contactPrice}</span>
</button>