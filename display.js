const api_url =" https://clinicaltrials.gov/api/query/full_studies?expr=Spinal+Tumor%0D%0A%0D%0A&min_rnk=1&max_rnk=5&fmt=json";
        getapi(api_url);
        async function getapi(url) {
            const response = await fetch(url);
            var data = await response.json();
            console.log(data);
            let i=3;
            let startdate=data.FullStudiesResponse.FullStudies[i].Study.ProtocolSection.IdentificationModule.NCTId;
            let obj=document.getElementById("title");
            obj.innerHTML=startdate;
        }