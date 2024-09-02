import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useDebounce from '../components/Qidiruv'; // Yangi hookni import qiling

function Serial() {
    const [items, setItems] = useState([]);
    const [searchQuery, setSearchQuery] = useState('?rating.imdb=8-10&limit=100');
    const [malumod, setMalumod] = useState([]);
    const [qidiruv, setQidiruv] = useState("");

    const debouncedSearchQuery = useDebounce(qidiruv, 1000); // 3 soniya kechikish bilan debounced qidiruv

    function qidiruvlar(e) {
        if (e === "") {
            setSearchQuery("?rating.imdb=8-10&limit=100");
        } else {
            setSearchQuery(`/search?query=${e}`);
        }
    }

    useEffect(() => {
        axios.get(`https://api.kinopoisk.dev/v1.4/movie${searchQuery}`, {
            headers: {
                "X-API-KEY": "VRDWYGT-S5W4NTK-HFGZ3PE-W6EZB8K",
            },
        })
        .then((response) => {
          const datas =response.data.docs.filter((e)=>{
            return e.type== "movie";
          });
          setMalumod(datas);
          setItems(datas);

        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
    }, [searchQuery]);

    useEffect(() => {
        qidiruvlar(debouncedSearchQuery);
    }, [debouncedSearchQuery]);

    const getFilmIcon = (type) => {
        if (type === "tv-series") {
            return "https://cdn-icons-png.flaticon.com/512/1023/1023521.png";
        } else {
            return "https://cdn-icons-png.flaticon.com/512/1179/1179069.png";
        }
    };

    return (
        <div className='pt-[40px] bg-[#10141e] w-[100%] pr-[20px] h-[100vh]'>
            <div className='flex w-[100%] gap-6 items-center border-[#ffffff3c] pb-[20px] border-b-[1px]'>
                <label htmlFor="">
                    <img className='w-[32px]' src="https://cdn-icons-png.flaticon.com/512/17148/17148531.png" alt="Search Icon" />
                </label>
                <input 
                    value={qidiruv}  
                    onChange={(e) => setQidiruv(e.target.value)}
                    className='w-[100%] text-[25px] bg-[#0000] focus:border-none focus:outline-none text-white' 
                    type="text" 
                    placeholder='Search for Serial or TV series'
                />
            </div>
            {qidiruv && (
                <div className='div-1'>
                    <h2 className='text-[32px] text-[#fff] mt-[30px] mb-4'>TV Series</h2>
                    <div className='flex flex-wrap justify-between items-start gap-y-[20px]'>
                        {items.map((e) => (
                            <div key={e.id} className='div-2 text-[#f7f7f7c2] bg-[#10141e] drop-shadow-xl border-[#ffffff0e] border-solid border-[1px] rounded-[5px]'>
                                <img className='w-[200px] h-[250px] rounded-t-[5px] relative' src={e.poster ? e.poster.previewUrl : "https://image.openmoviedb.com/kinopoisk-images/10592371/08982e09-7b03-42f5-8074-019920ca0e7c/orig"} alt="" />
                                <button className='button p-1 hover:bg-[#ffffff61] rounded-[50px]'>
                                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path d="M10 10.5H14M12 8.5V12.5M8.25 5H15.75C16.4404 5 17 5.58763 17 6.3125V19L12 15.5L7 19V6.3125C7 5.58763 7.55964 5 8.25 5Z" stroke="#464455" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                </button>
                                <div className='flex flex-col h-[22%] p-[5px] m-1'>
                                    <div className='flex'>
                                        <p className='font-[200] text-[13px] flex items-center'>
                                            {e.year} - {e.type} - 
                                            <img className='w-5 h-4' src={getFilmIcon(e.type)} alt="" />
                                        </p>
                                    </div>
                                    <h3 className='w-[150px] font-[700] text-[14px]'>{e.alternativeName}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {!qidiruv && (
                <div className='div-1'>
                    <h2 className='text-[32px] text-[#fff] mt-[30px] mb-4'>TV Series</h2>
                    <div className='flex flex-wrap justify-between gap-y-[20px]'>
                        {items.map((e) => (
                            <div key={e.id} className='div-2 text-[#f7f7f7c2] bg-[#10141e] drop-shadow-xl border-[#ffffff0e] border-solid border-[1px] rounded-[5px]'>
                                <img className='w-[200px] h-[250px] rounded-t-[5px] relative' src={e.poster ? e.poster.previewUrl : "https://image.openmoviedb.com/kinopoisk-images/10592371/08982e09-7b03-42f5-8074-019920ca0e7c/orig"} alt="" />
                                <button className='button p-1 hover:bg-[#ffffff61] rounded-[50px]'>
                                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path d="M10 10.5H14M12 8.5V12.5M8.25 5H15.75C16.4404 5 17 5.58763 17 6.3125V19L12 15.5L7 19V6.3125C7 5.58763 7.55964 5 8.25 5Z" stroke="#464455" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                </button>
                                <div className='flex flex-col h-[22%] p-[5px] m-1'>
                                    <div className='flex'>
                                        <p className='font-[200] text-[13px] flex items-center'>
                                            {e.year} - {e.type} - 
                                            <img className='w-5 h-4' src={getFilmIcon(e.type)} alt="" />
                                        </p>
                                    </div>
                                    <h3 className='w-[150px] font-[700] text-[14px]'>{e.alternativeName}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Serial;
