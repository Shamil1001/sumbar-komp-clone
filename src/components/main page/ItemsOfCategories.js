import React from 'react'
import './categories.css'
import './catItems.css'

import cases from '../images/items_of_categories/cases.png'
import motherboard from '../images/items_of_categories/motherboard.png'
import cpu from '../images/items_of_categories/cpu.png'
import HDD from '../images/items_of_categories/hdd.png'
import ssd from '../images/items_of_categories/ssd.png'
import webcam from '../images/items_of_categories/webcams.png'
import mouse from '../images/items_of_categories/mouse.png'
import keyboard from '../images/items_of_categories/keyboard.png'
import hddExternal from '../images/items_of_categories/hddExternal.png'
import flash from '../images/items_of_categories/flash drive.png'
import memory from '../images/items_of_categories/memory.png'
import aio from '../images/items_of_categories/all in one.png'
import brandComputers from '../images/items_of_categories/brandComputer.png'
import server from '../images/items_of_categories/server.png'
import laptops from '../images/items_of_categories/laptop.png'
import bags from '../images/items_of_categories/bags.png'
import hddd from '../images/items_of_categories/hdd.png'
import phone from '../images/items_of_categories/mobile phone.png'
import smartWatch from '../images/items_of_categories/smart watch.png'
import chargers from '../images/items_of_categories/charger.png'
import laserPrinter from '../images/items_of_categories/laser printer.png'
import copier from '../images/items_of_categories/copier.png'
import PhonesForHome from '../images/items_of_categories/Phones.png'
import routers from '../images/items_of_categories/routers.png'
import modem from '../images/items_of_categories/modem.png'
import network from '../images/items_of_categories/network.png'
import cctvCamera from '../images/items_of_categories/cctv camera.png'
import cctvRecorder from '../images/items_of_categories/cctv recorder.png'
import POS from '../images/items_of_categories/POS.png'
import barcode from '../images/items_of_categories/barcode scanner.png'
import scales from '../images/items_of_categories/scales.png'
import ups from '../images/items_of_categories/UPS.png'
import upsBatteries from '../images/items_of_categories/upsBattery.png'
import surgeProtector from '../images/items_of_categories/Surge protectors.png'
import chair from '../images/items_of_categories/Computer chairs.png'
import tables from '../images/items_of_categories/computer tables.png'
import homeAttributes from '../images/items_of_categories/home attributes.png'
import tuner from '../images/items_of_categories/Tuners.png'
import vacuum from '../images/items_of_categories/vacuumCleaner.png'
import lithiumBattery from '../images/items_of_categories/lithium batteries.png'
import adapter from '../images/items_of_categories/adapters.png'
import software from '../images/items_of_categories/software.png'


export const ItemsOfCategories = () => {
  return (
    <>
    <div className="dropdown-content">
                    <div className="cat2">
                      <a href="#"><img src={cases}/>Cases PC</a>
                      <a href="#"><img src={motherboard}/>Motherboard</a>
                      <a href="#"><img src={cpu}/>CPU</a>
                      <a href="#"><img src={HDD}/>HDD</a>
                      <a href="#"><img src={ssd}/>SSD</a>
                    </div>
                    <div className="cat3">
                      <a href="#"><img src={webcam}/>Webcams </a>
                      <a href="#"><img src={mouse}/>Computer Mice</a>
                      <a href="#"><img src={keyboard}/>Keyboard</a>
                    </div>
                    <div className="cat4">
                      <a href="#"><img src={hddExternal}/>HDD External </a>
                      <a href="#"><img src={flash}/>Flash Drive(USB)</a>
                      <a href="#"><img src={memory}/>Memory Cards(SD)</a>
                    </div>
                    <div className="cat5">
                      <a href="#"><img src={aio}/>All in One</a>
                      <a href="#"><img src={brandComputers}/>Brand computers</a>
                      <a href="#"><img src={server}/>Servers</a>
                    </div>
                    <div className="cat6">
                      <a href="#"><img src={phone}/>Mobile phones</a>
                      <a href="#"><img src={smartWatch}/>Smart watches</a>
                      <a href="#"><img src={chargers}/>Phone chargers</a>
                    </div>
                    <div className="cat7">
                      <a href="#"><img src={laptops}/>Laptops</a>
                      <a href="#"><img src={bags}/>Bags and backpacks</a>
                      <a href="#"><img src={hddd}/>HDD</a>
                    </div>
                    <div className="cat8">
                      <a href="#"><img src={laserPrinter}/>Laser printers</a>
                      <a href="#"><img src={copier}/>copiers</a>
                      <a href="#"><img src={PhonesForHome}/>Phones for home and office</a>
                    </div>
                    <div className="cat9">
                      <a href="#"><img src={routers}/>Routers</a>
                      <a href="#"><img src={modem}/>Modem 3G & 4G</a>
                      <a href="#"><img src={network}/>Network cables</a>
                    </div>
                    <div className="cat10">
                      <a href="#"><img src={cctvCamera}/>CCTV Cameras</a>
                      <a href="#"><img src={cctvRecorder}/>CCTC recorders(NVR/DVR/XVR)</a>
                    </div>
                    <div className="cat11">
                      <a href="#"><img src={POS}/>POS COmputer and others</a>
                      <a href="#"><img src={barcode}/>Barcode scanners</a>
                      <a href="#"><img src={scales}/>Scales</a>
                    </div>
                    <div className="cat12">
                      <a href="#"><img src={ups}/>UPS</a>
                      <a href="#"><img src={upsBatteries}/>UPS batteries</a>
                      <a href="#"><img src={surgeProtector}/>Surge</a>
                    </div>
                    <div className="cat13">
                      <a href="#"><img src={chair}/>Computer chairs</a>
                      <a href="#"><img src={tables}/>Computer tables</a>
                    </div>
                    <div className="cat14">
                      <a href="#"><img src={homeAttributes}/>Home attributes</a>
                      <a href="#"><img src={tuner}/>Tuners</a>
                      <a href="#"><img src={vacuum}/>Vacuum cleaners</a>
                    </div>
                    <div className="cat15">
                      <a href="#"><img src={lithiumBattery}/>Lithium batteries</a>
                      <a href="#"><img src={adapter}/>Adapters and converters</a>
                      <a href="#"><img src={software}/>Software</a>
                    </div>
                  </div>
    </>
  )
}
