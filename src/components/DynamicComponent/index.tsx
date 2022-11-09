import React,{useState} from 'react'
import MainCardFour from '../MainCardFour'
import MainCardOne from '../MainCardOne'
import MainCardSix from '../MainCardSix'
import MainCardThree from '../MainCardThree'
import MainCardTwo from '../MainCardTwo'
import MainCardFive from "../MainCardFive"
import MainCardSeven  from "../MainCardSeven"
import MainCardEight  from "../MainCardEight"
import MainCardNine  from "../MainCardNine"


function index() {
      // Open targated component hook
  const [openComponent, setopenComponent] = useState(1)
  return (
    <>
    {openComponent === 1 ? (
              <MainCardOne
                setopenComponent={setopenComponent}
                // setProduct={setProduct}
              />
            ) : openComponent === 2 ? (
              <MainCardTwo
                setopenComponent={setopenComponent}
                // setPropertyType={setPropertyType}
              />
            ) : openComponent === 3 ? (
              <MainCardThree
                setopenComponent={setopenComponent}
                // sethomeCost={sethomeCost}
                // home_value={home_value}
                // formatCurrency={formatCurrency}
              />
            ) : openComponent === 4 ? (
              <MainCardFour
                setopenComponent={setopenComponent}
                // setCost={setCost}
                // cost={cost}
                // formatCurrency={formatCurrency}
              />
            ) : openComponent === 5 ?  (
              <MainCardFive
              setopenComponent={setopenComponent}
              />
            ) : openComponent === 6 ?  (
              <MainCardSix
              setopenComponent={setopenComponent}
              />
            ) : openComponent === 7 ? (
              <MainCardSeven
              setopenComponent={setopenComponent}
              />
            ) : openComponent === 8 ? (
              <MainCardEight
              setopenComponent={setopenComponent}
              />
            ) : (
              <MainCardNine
              setopenComponent={setopenComponent}
              />
            )}
    </>
  )
}

export default index