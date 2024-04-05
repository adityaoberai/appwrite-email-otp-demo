<script>
    import { user } from "$lib/user.js";

    var token;
    var securityPhrase = "Create OTP first to get the security phrase.";

    async function createOtp(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        token = await user.createOtp(formData.get('email'));
        securityPhrase = `Security phrase: ${token.phrase}`;
        console.log(token);
        alert("OTP sent to email");
    }

    async function verifyOtp(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const response = await user.verifyOtp(token.userId, formData.get('otp'));
        console.log(response);
        alert("OTP verified");
    }
</script>

<section class="u-flex-vertical">
    <div class="container u-flex-vertical u-padding-64 u-gap-32">
        <div id="email" class="u-flex-vertical u-gap-8">
            <h2 class="heading-level-2">Enter Email</h2>
            <form on:submit={createOtp} class="u-inline-flex u-gap-4">
                <input type="email" name="email" id="email" placeholder="team@appwrite.io" required>
                <button class="button" type="submit">Submit</button>
            </form>
        </div>
        
        <div id="otp" class="u-flex-vertical u-gap-8">
            <h2 class="heading-level-2">Enter OTP</h2>
            <form on:submit={verifyOtp} class="u-inline-flex u-gap-4">
                <input type="text" name="otp" id="otp" placeholder="012345" required>
                <button class="button" type="submit">Submit</button>
            </form>
            <p>{securityPhrase}</p>
        </div>
    </div>
</section>

<style>
    section {
        height: 100vh;
        width: 100vw;
        background-color: hsl(var(--color-primary-100));
    }

    .container {
        align-items: center;
        justify-content: center;
        max-width: 50%;
        width: fit-content;
        height: min-content;
        border-radius: var(--border-radius-medium);
        border: 1px solid hsl(var(--color-neutral-20));
        margin: auto;
        padding: 0;
        background-color: hsl(var(--color-neutral-0));
        box-shadow: var(--shadow-large);
    }

    @media (max-width: 768px) {
        .container {
            max-width: 80%;
        }
    }
</style>