<script>
import Logo from "../details/logo.svelte"
import LogoText from "../details/logo_text.svelte"

</script>

<div id="container" class="container">
    <Logo />
    <div id="blank" class="blank holder"></div>
    <LogoText />


</div>


<style>



    @media(min-width: 900px){
            #container{
                display: grid;

                grid-template-columns: 2fr 1fr 3fr;
                place-items: center;
                margin: 25px;
            }


}
</style>