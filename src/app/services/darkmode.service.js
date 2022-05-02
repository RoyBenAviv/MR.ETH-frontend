import { storageService } from "./storageService"

const THEME_KEY = 'mode'

function changeTheme(lightmode) {

  storageService.store(THEME_KEY, lightmode)

  if(lightmode) {
    document.querySelector('body').classList.add('light')
    document.querySelector('.header-logo').classList.add('light')
    document.querySelector('.user-profile').classList.add('light')
    document.querySelector('.navbar').classList.add('light')
  } else {
    document.querySelector('body').classList.remove('light')
    document.querySelector('.header-logo').classList.remove('light')
    document.querySelector('.user-profile').classList.remove('light')
    document.querySelector('.navbar').classList.remove('light')
  }
}

function getMode(){
  return storageService.load(THEME_KEY)
}


export const darkmodeService = {
    changeTheme,
    getMode,
}