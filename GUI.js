// CPU Status

// CPU 1

    // Test 1
    let work_list1 = document.querySelector('.work-list1');
    let work_list2 = document.querySelector('.work-list2');
    let work_list3 = document.querySelector('.work-list3');

    let cpu_img1 = document.querySelector('.cpu_img1');
    let status1 = document.querySelector('.status1');

    let cpu_img2 = document.querySelector('.cpu_img2');
    let status2 = document.querySelector('.status2');

    let cpu_img3 = document.querySelector('.cpu_img3');
    let status3 = document.querySelector('.status3');

    function updateText(){

        let cpu2Array = [];
        cpu2ToArray(cpu2.head, cpu2.length);

        function cpu2ToArray(list, length){
            if(length == 0){
                return;
            }
            else{
                cpu2Array.push(list.data);
                return cpu2ToArray(list.next, length-1);
            }
        }

        let cpu3Array = [];
        cpu3ToArray(cpu3.head, cpu3.length);

        function cpu3ToArray(list, length){
            if(length == 0){
                return;
            }
            else{
                cpu3Array.push(list.data);
                return cpu3ToArray(list.next, length-1);
            }
        }

        work_list1.innerHTML = '';
    
        for(let i = 0; i < CPU.array.length && i < 5; i++){
            work_list1.innerHTML += `   <div class="row" style="padding-left: 12px; height: 25px;">
                                    <div class="col-lg-6 work_name work1_name1">${CPU.array[i].name}</div>
                                    <div class="col-lg-4 work_time work1_time1">${CPU.array[i].remainingTime}</div>
                                    <div class="col-lg-2 work_prio work1_prio1">${CPU.array[i].priority}</div>
                                </div>
                                <hr class="c-orange">`;
        }

        work_list2.innerHTML = '';

        for(let i = 0; i < cpu2.length && i < 5; i++){
            work_list2.innerHTML += `   <div class="row" style="padding-left: 12px; height: 25px;">
                                            <div class="col-lg-6 work_name work2_name1">${cpu2Array[i].name}</div>
                                            <div class="col-lg-4 work_time work2_time1">${cpu2Array[i].remainingTime}</div>
                                            <div class="col-lg-2 work_prio work2_prio1">${cpu2Array[i].priority}</div>
                                        </div>
                                        <hr class="c-orange">`;
        }

        work_list3.innerHTML = '';

        for(let i = 0; i < cpu3.length && i < 5; i++){
            work_list3.innerHTML += `   <div class="row" style="padding-left: 12px; height: 25px;">
                                            <div class="col-lg-6 work_name work2_name1">${cpu3Array[i].name}</div>
                                            <div class="col-lg-4 work_time work2_time1">${cpu3Array[i].remainingTime}</div>
                                            <div class="col-lg-2 work_prio work2_prio1">${cpu3Array[i].priority}</div>
                                        </div>
                                        <hr class="c-orange">`;
        } 
        console.log(cpu2Array)
        console.log("test-----------------------------------------------------------------------------------------------------")
        

        // Cpu 1

        if(CPU.array.length > 0){
            status1.innerHTML = '';
            status1.innerHTML = 'Busy';
            status1.style.color = '#FC4C01';

            cpu_img1.src = 'media/cpu.png';
        }
        else{
            status1.innerHTML = '';
            status1.innerHTML = 'Available';
            status1.style.color = '#8ACF8C';

            cpu_img1.src = 'media/cpuGreen.png';
        }

        // Cpu 2

        if(cpu2.length > 0){
            status2.innerHTML = '';
            status2.innerHTML = 'Busy';
            status2.style.color = '#FC4C01';

            cpu_img2.src = 'media/cpu.png';
        }
        else{
            status2.innerHTML = '';
            status2.innerHTML = 'Available';
            status2.style.color = '#8ACF8C';

            cpu_img2.src = 'media/cpuGreen.png';
        }

        // Cpu 3

        if(cpu3.length > 0){
            status3.innerHTML = '';
            status3.innerHTML = 'Busy';
            status3.style.color = '#FC4C01';

            cpu_img3.src = 'media/cpu.png';
        }
        else{
            status3.innerHTML = '';
            status3.innerHTML = 'Available';
            status3.style.color = '#8ACF8C';

            cpu_img3.src = 'media/cpuGreen.png';
        }

    }