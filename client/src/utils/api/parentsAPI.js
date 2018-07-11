import axios from 'axios';

export default {
  getAllParents: function () {
    return axios.get('/api/parents');
  },
  getSomeParents: function (query) {
    return axios.get('/api/parents/', { params: query });
  },
  getOneParentById: function (id) {
    return axios.get(`/api/parents/${id}`);
  },
  getOneParentByIdTwo: function (id) {
    return axios.get(`/api/parents/idtwo/${id}`);
  },
  deleteParent: function (id) {
    return axios.delete(`/api/parents/'${id}`);
  },
  submitNewParent: function (parentData) {
    // Get current date for startDate
    let curDate = new Date()
    // Formats Date object into "YYYY-MM-DD"
    parentData.startDate = `${curDate.getFullYear()}-${(curDate.getMonth() + 1).toString().padStart(2, "0")}-${curDate.getDate()}`
    // formats recieved data to match database
    let formattedData = {
      isActive: true,
      info: {
        name: {
          first: parentData.first,
          last: parentData.last
        },
        contact: {
          phone: parentData.phone,
          email: parentData.email
        },
        dob: {
          full: parentData.dob
        },
        startDate: {
          full: parentData.startDate
        },
        address: {
          line1: parentData.line1,
          line2: parentData.line2,
          city: parentData.city,
          state: parentData.state,
          zip: parentData.zip,
        },
        emergencyContact: {
          name: {
            first: parentData.ecFirst,
            last: parentData.ecLast,
          },
          contact: {
            phone: parentData.ecPhone,
            email: parentData.ecEmail
          },
          relation: parentData.relation
        },
        heardBy: parentData.heardBy,
        referBy: parentData.referBy
      }
    }
    console.log(formattedData);
    return axios.post('/api/parents', formattedData);
  }
};
