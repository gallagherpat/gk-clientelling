//@ts-nocheck
"use client"
export default function CustomerCard(props){
    const member = props?.member
    const preferences = member.preferences;
    const rewards = member.rewards;
    // console.log(member)
    return(
    <div id="cust-info-long" className="flex justify-center mx-6 my-3 text-lg bg-white rounded-md place-content-center drop-shadow-lg">

        <div className="py-4 mx-4">
            <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26">
                <path d="M222 801q63-44 125-67.5T480 710q71 0 133.5 23.5T739 801q44-54 62.5-109T820 576q0-145-97.5-242.5T480 236q-145 0-242.5 97.5T140 576q0 61 19 116t63 109Zm257.814-195Q422 606 382.5 566.314q-39.5-39.686-39.5-97.5t39.686-97.314q39.686-39.5 97.5-39.5t97.314 39.686q39.5 39.686 39.5 97.5T577.314 566.5q-39.686 39.5-97.5 39.5Zm.654 370Q398 976 325 944.5q-73-31.5-127.5-86t-86-127.266Q80 658.468 80 575.734T111.5 420.5q31.5-72.5 86-127t127.266-86q72.766-31.5 155.5-31.5T635.5 207.5q72.5 31.5 127 86t86 127.032q31.5 72.532 31.5 155T848.5 731q-31.5 73-86 127.5t-127.032 86q-72.532 31.5-155 31.5ZM480 916q55 0 107.5-16T691 844q-51-36-104-55t-107-19q-54 0-107 19t-104 55q51 40 103.5 56T480 916Zm0-370q34 0 55.5-21.5T557 469q0-34-21.5-55.5T480 392q-34 0-55.5 21.5T403 469q0 34 21.5 55.5T480 546Zm0-77Zm0 374Z"/>
            </svg>
                <p className="font-bold indent-1">Member ID: {member.id}</p>
            </div>
                <h3 className="ml-8">DOB: {member.DOB}</h3>
                {/* <h3 className="ml-8">Status: {member.status}</h3> */}
                {/* <h4 className="indent-8">Points: {member.points}</h4> */}
                <h5 className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26">
                        <path d="M716 936H272V424l278-288 39 31q6 5 9 14t3 22v10l-45 211h299q24 0 42 18t18 42v81.839q0 7.161 1.5 14.661T915 595L789 885q-8.878 21.25-29.595 36.125Q738.689 936 716 936Zm-384-60h397l126-299v-93H482l53-249-203 214v427Zm0-427v427-427Zm-60-25v60H139v392h133v60H79V424h193Z"/>
                    </svg>
                    <div className="font-bold indent-1">Preferred Sizes
                    <ul>
                        {preferences.map((preference, index) => <li key={index} className="font-normal indent-6">{preference}</li>)}
                    </ul>
                    </div>

                </h5>
                <p id="preference-1" className="indent-8"></p>
                <p id="preference-2" className="indent-8"></p>
                <div className="flex-none h-[1px] my-2 px-28 bg-[#33333331]"></div>
                <h5 className="flex indent-1">
                <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26">
                    <path d="m524 794 140-140q11-11 16-24.5t5-28.5q0-32-22.5-54.5T608 524q-20 0-40 13t-44 42q-24-29-44-42t-40-13q-32 0-54.5 22.5T363 601q0 15 5 28.5t16 24.5l140 140Zm35 165q-18 18-43.5 18T472 959L97 584q-10-10-13.5-21T80 540V236q0-26 17-43t43-17h304q12 0 24 3.5t22 13.5l373 373q19 19 19 44.5T863 655L559 959Zm-41-41 304-304-378-378H140v304l378 378ZM245 392q21 0 36.5-15.5T297 340q0-21-15.5-36.5T245 288q-21 0-36.5 15.5T193 340q0 21 15.5 36.5T245 392ZM140 236Z"/>
                </svg>                    
                <div className="font-bold indent-1">Status
                <ul className="font-normal indent-6">
                    {member.status}
                </ul>
                    {/* <ul>
                        {rewards.map((reward, index) => <li key={index} className="font-normal indent-6">{reward}</li>)}
                    </ul> */}
                    </div>                
                </h5>
            </div>
    </div>
    )}