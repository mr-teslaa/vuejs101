<template>
    <form>
        <label>Email:</label>
        <input type="email" v-model="email" required />

        <label>Password:</label>
        <input type="password" v-model="password" required />

        <label>Role:</label>
        <select v-model="role">
            <option value="select">-- select --</option>
            <option value="developer">Web Developer</option>
            <option value="designer">Web Designer</option>
        </select>

        <label>Skills:</label>
        <input type="text" v-model="tempSkill" @keyup.alt="addSkill" />
        <div v-for="skill in skills" :key="skill" class="pill">
            {{ skill }}
        </div>

        <div class="terms">
            <input type="checkbox" v-model="terms" required />
            <label>I agree the terms and condition</label>
        </div>

        <div>
            <input type="checkbox" value="kahlid" v-model="names" />
            <label> Khalid </label>
        </div>
        <div>
            <input type="checkbox" value="hamza" v-model="names" />
            <label> Hamza </label>
        </div>
        <div>
            <input type="checkbox" value="omar" v-model="names" />
            <label> Omar </label>
        </div>
    </form>

    <p>Email: {{ email }}</p>
    <p>Password: {{ password }}</p>
    <p>Role: {{ role }}</p>
    <p>Terms: {{ terms }}</p>
    <p>Names: {{ names }}</p>
</template>

<script>
export default {
    data() {
        return {
            email: "",
            password: "",
            role: "select",
            terms: false,
            names: [],
            tempSkill: "",
            skills: [],
        };
    },

    methods: {
        addSkill(e) {
            if (e.key === "," && this.tempSkill) {
                if (!this.skills.includes(this.tempSkill)) {
                    this.skills.push(this.tempSkill);
                }
                this.tempSkill = "";
            }
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}

label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}

input,
select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}

input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
}
</style>
