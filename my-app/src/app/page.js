import TaskCard from '@/components/task-card/TaskCard';
import { url } from '@/utility/url';
import axios from 'axios';
import React from 'react';
const getTaskData = async () => {
  const res = await axios.get(`${url()}/all-task`);
  const data = res.data.data
  return data;
}
const page = async () => {
  const taskData = await getTaskData();
  return (
    <div className=' w-11/12 mx-auto ' >
      <div className=' grid lg:grid-cols-3 grid-cols-1 lg:gap-10 lg:my-12 my-6   ' >
        {
          taskData.map((item, i) => {
            return (
              <div key={i} >
                <TaskCard task={item} ></TaskCard>
              </div>
            )
          })
        }
      </div>


    </div>
  );
};

export default page;