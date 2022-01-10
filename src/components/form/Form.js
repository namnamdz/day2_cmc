import React, { useState } from 'react'
import InputBox from '../input/InputBox';
import './form.css';

function Form() {
    const [name, setName] = useState('');
    const [numberOfGuests, setNumberOfGuests] = useState(0);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [dateOfOrganization, setDateOfOrganization] = useState('');
    const [address, setAddress] = useState('');
    const [typeEvent, setTypeEvent] = useState('');
    const handleChangName = (event) =>{
        setName(event.target.value);
    }
    const handleChangnumberOfGuests = (event) =>{
        setNumberOfGuests(event.target.value);
    }
    const handleChangphoneNumber = (event) =>{
        setPhoneNumber(event.target.value);
    }
    const handleChangdateOfOrganization = (event) =>{
        setDateOfOrganization(event.target.value);
    }
    const handleChangaddress = (event) =>{
        setAddress(event.target.value);
    }
    const handleChangtypeEvent = (event) =>{
        setTypeEvent(event.target.value);
    }
    
    const submibForm = (e) =>{
        e.preventDefault();
        alert(`Ho ten: ${name},SDT:${phoneNumber}, 
            Khach: ${numberOfGuests},
            Ngay to chuc: ${dateOfOrganization},
            Dia chi:${address},
            Loai sk: ${typeEvent}`)
        }
    return (
        <div className='form'>
            <h1>Liên hệ đặt tiệc</h1>
            <p>Kế thừa tinh hoa của Golden Gate Restaurant chúng tôi cung cấp giải pháp dịch vụ tiệc tại gia đạt chuẩn chất lượng nhà hàng giúp khách hàng</p>
            <div className='form__infomation'>
            <InputBox
                type='text'
                name='Họ và tên'
                handleChange={(event)=>handleChangName(event)}
             />
             <InputBox
                type='number'
                name='Số lượng khách'
                handleChange={(event)=>handleChangnumberOfGuests(event)}
             />
             <InputBox
                type='text'
                name='Số điện thoại'
                handleChange={(event)=>handleChangphoneNumber(event)}
             />
             <InputBox
                name='Ngày tố chức sự kiện'
                handleChange={(event)=>handleChangdateOfOrganization(event)}
             />
             <InputBox
                type='date'
                name='Địa chỉ'
                handleChange={(event)=>handleChangaddress(event)}
             />
             <InputBox
                type='text'
                name='Loại sự kiện'
                handleChange={(event)=>handleChangtypeEvent(event)}
             />
             
            </div>
            <input type='checkbox' className='checkbox'/><label>Nhận tư vấn trọn gói sự kiện(MC, ánh sáng, sân khấu)</label><br/>
            <button type='submit' onClick={(e)=>submibForm(e)}>Gửi thông tin ngay</button>
            
        </div>
    )
}

export default Form
