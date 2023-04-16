<template>
  <table class="table align-middle mb-0 bg-white">
    <thead class="bg-light">
      <tr>
        <th>Name</th>
        <th>Blood Type</th>
        <th>address</th>
        <th>contact no</th>
        <th>age</th>
        <th>gender</th>
        <th>requst made at</th>
        <th>respond</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="values in requesterdetail" :key="values.id">
        <td>
          <div class="d-flex align-items-center">
            <img
              src="https://mdbootstrap.com/img/new/avatars/8.jpg"
              alt=""
              style="width: 45px; height: 45px"
              class="rounded-circle"
            />
            <div class="ms-3">
              <p class="fw-bold mb-1">{{ values.Requester_name }}</p>
              <p class="text-muted mb-0">{{ values.Requester_mail }}</p>
            </div>
          </div>
        </td>
        <td>
          <p class="fw-normal mb-1">{{ values.bloodtype }}</p>
        </td>
        <td>{{ values.address }}</td>
        <td>{{ values.contactno }}</td>
        <td>{{ values.age }}</td>
        <td>{{ values.gender }}</td>
        <td>{{ values.created_at }}</td>
        <td>
          <button type="button" class="btn btn-link btn-sm btn-rounded">
            Confirm
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        userids: "",
      },

      requesterdetail: [],
    };
  },

  mounted() {
    let user = localStorage.getItem("userDetails");
    user = JSON.parse(user);
    this.form.userids = user.id;

    axios
      .post("http://127.0.0.1:8000/api/requestFromOthers", this.form)
      .then((response) => {
        if (response.status == "200") {
          this.requesterdetail = response.data.data;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
<style></style>
