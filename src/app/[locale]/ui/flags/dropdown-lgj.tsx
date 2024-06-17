export default function DropdownLgj() {



    

    return(
        
        <>
 <label className="border-2 rounded">
          <p className='sr-only'>Change Language</p>

        </label>
            {/* <select defaultValue={localActive} className='bg -transparent py-2' onChange={onSelectChange} disabled={isPending}> */}
            <select>
          <option value="ar">arabe</option>
          <option value="en">englash</option>
                    </select>


        </>
    )
}