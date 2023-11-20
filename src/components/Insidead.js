import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../Homesty.css'

export default function Insidead() {


  const dcimg ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmt0fKL2QyoWH9_AsjVuBfWDRSSRKmgFwf5Q&usqp=CAU"
  const qimg ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKHRThZ0LBDulFrJXExLv3rX40AjZK9IJm2A&usqp=CAU"
  const resimg = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBISFRgSFRUYGBgYGBkZGhgZGBgcGBkYGBgaGRgYGBwcIS4lHB4sIRgYJzgnKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHxISHzQsJSsxNjQ9NjQ/NDQ9NDE3Pzg0NjY2NDQ0NDE0NjQ2NDY0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIALkBEQMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcBBQIDBAj/xABDEAACAQIDBAgDBQYEBgMBAAABAgADEQQFIQYSMUEHEyJRYXGRoTKBsUJSYoLBFCNyktHwM6KywmOT0uHi8RYkUxf/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAwQCAQX/xAAmEQADAAICAgICAgMBAAAAAAAAAQIDEQQSITFBURMiFHFhkaEF/9oADAMBAAIRAxEAPwC5YmYgGIiIAiIgCIiAIiIAiIgCIvPLi8bSpLv1HRFHN2Cj1MA9UzIZmHSTldHTr+sP/DR3HqBb3mpqdLmD+xRrN42QfVoBZMStE6XcL9rD118ewf1mzwPSfllQ2NRqZ/GjgfzAEe8AnETX4DNsPiBvUqqVB3owb1twnvBgGYiIAiIgCIiAIiIAiIgCIiAIiIAiIgGJmIgCIiAIiIAiIgCJiDABM12b5vQwiGrWdUQczxJ7lA1J8BNLtltfRy9NRv1W/wAOmDqx4XbuXx9JW6ZdiMdU/accxZj8FG9kQcgQPh8hqeZgG4zLb/GYwmngKRROBrOBfzAOi+58JqF2Xeu3WYqvUrvzG8d31P6Wkxy7JiwAtZRwAFgB4AST4PJkUaiAQPBbM0U+Cgg8SN4+rXm1TJX5KB5ASc08Ii8hO0Ul7oBAnyV+ag+YE1mM2Zpv8dBD47tj6raWgaa9062wqHlAKTxOyApt1mHqPRccLMbeosw9TPbgNtcyy8hcWnX0uHWLbft/END5MAfGWlicoR+Uj2ZZBYGwuDxBFwR3Ec4Busg2kw2NTrKLhu9To6+DKdR9JuwZRmYZBWwtT9owbNTddSgOjDmF5EfhOknOw+3CY0dVUHV11HaTgHtxZL+44iATuJxVrzlAEREARExAMxMXgGAZiIgCIiAIiIAiIgCIiAIiIAiIgGJG9sdpqeX0DVaxc3Wml/je2nko4k903uKrrTUsxAABJJ4ADUkylTiWzXFti3B6mmdygh4GxuGI/wAx8wOUA55NltWtUOMxPbrubgHgi8rDkbHQcpPsqyi1i0xkuW/aMklNAIBmhRC8BPUs61nYsA5TMxMwBERAE4OgPGc4gGhzTKFcEgaysNqtnqiv+0ULpWQ7110L25i32x78JdZF5pM6y4OCQNYBptgdrVx1Kz2FVLCovnwcD7psfI3EmolDZqHyzFpjKXwlrVEHj8Qty3uI8RLN/wDnGARFZq6kkA7qXZtRfULw+c9UtvSR46SW2yWTF5WuYdKSC4oUGbuZ23R/KLn3nk2W28xWJxtOnWKCm+8oVFsAxF1NySTwI+cr/Hvq6aJfmjeky1GNpDc96RMFhiUXerONCEtug9xc6el5qelbaF6SJhKbFTUUtUI47l7BR3XN7+A8ZVmEwz1WWnTUszGyqouSZTDx1U9r9HOXM09ST7EdK+IJ7GGpqPxOzH2AnryrpQq1HSm+GVi7KoNNyDdjYaMPHvmhodG2ZOLlaa+DPr87AzabI7D4uhjadTEUwEphm3lYMpYCyjv4tfhylLWDq9HEvK2tlurMzCzMwmszERAEREAREQBERAEREATBmZ11WsCYBXnSvnDJRXB0z+8xLblvwC296kqPmZ17N5UtNUpqNEAF+882+ZvNBj6xxma1H4rh13F7t/h9S3pLEyTDBVvANph6YUWnes4Cc1gHYs7VnUpnMGAcxEwrXnFz3QNmbwWkDx21mIJKqqpYkfeNxpz0nLZjOKzYjcquzB1IANrBhqLAaDQGWfHtT2ZkXMxu+qJVjc6w9G4qVFUjle7eg1mqw+2GGqVkooGO+26HIst7G3HX/wByPbeYTcrrUA0dP8ymx9isi1NzTZXHFWDD8pvL4+PNY+2/JHJy6m+uvn/heAMw63Fp04WsHRXHBlDD5i89ExH0E9lGba5cKGOqI2lOuAb8hv8ABh/C4vIdhboWptoVJBHiDYz6D2kyHD4m1SpTDsgIUkmwB11ANjw5yktrsJ1OLJAsHAb56qfce80RlSpMheNuaX+jllGUVsXU6qioZrFtWCgKLXNz58pOsk6NK1OolWpXVSjK4WmpJupBsWb+kiexWP6jGUHJsC243k43fqRL8Etycty9L00S4+OaW37RT/TBg2XEUq32XplL9zI17ejSFZZmNTC1Vr0m3XW9iQCNRYgg8RPoHaDJKONpGjVBsdVYfEjDgynvlY47osxak9VUpuvLe3ka3joRGDNHTpZ1lxV27SeMdJuZf8H/AJZ/6p6MN0pY1T20ouO4Kyn1DGef/wDmWZd1H/mf+M0Ge7P4nAsq11A3wSpVgytbQ2PzHrKqcFPS0TdZZ8vZdeye1lHMFO4CjrbfRrXAP2lP2l8ZI58+bDY1qOOoMDo79W3ir6W9bH5T6DExZ8aitL0asN9p8nKIiRKiIiAIiIAiIgCImIBmeHM6u5TY9wJ9J7LzSbV1N3D1D3U3/wBJgFW7Bp1hq1zxqVib+A1/3S2MHTsolX9HrLTwy1GNlDOxP5puMftHWqdlCUTkB8RHeW/QSmPG6fglkyzHsn71FX4mA8yB9YSsjfCynyIP0MqtiWNyST3k3PvOSaajSXXF2vZkfN8+iys5xL0qLVEALLbjqLXsTITiM4xNT4qjAdy9ke0muDwhOGWk5JLU7Ek3N2Hj3XkA6sgkHiND5idcaZe01tolzrtaaek0THYzE71NkJuUbn3Nr9bySSD7J19ytucmUj5jUfrJxIciets1cO++Jf48FbbSYXq8Q45Md8fm4+954MFW6uoj/dYH5X19ryVbbYfVKnmp+o/WRB1m/C++Nf0fLzr8eZ6+9k123wwqYdag13GB/K2h+olcsJZ+A/8AtYHdOpKFD/EosD7AytHW2h4/rJ8Z6Tj6Zflrbm18osjYfFb+FVTxQlPkDdfYiSSV90eYrdqVKJ+0oceamx9iPSWATMeeettH0ONXbGmdeIW6mUl0p4bdem/4mX/d+hl3k3lRdLVMbiHucf6WkkXIJQcixHEWI8CNRPovJcaK9ClWH20VvmRqPW8+cMPwEufosx/WYQ0idaTlfyt2l/X0m7kzvGq+jHx61bkm0q3bDbvFYbGtSoGmURVVlZb3fUtqDcaFR8paRlT510aYupVqVUr03LuzneDKe0SbaXEzYOnb9zRl7a/U8jdKmMK2FKiD97tn2vIlnOd4jGMHrvvEaKAAFUHiFUcJKKXRdjye09FR37zn23ZIco6LKKENiKrVPwKNxPmbkn2mzvgjzPsz9cteGRTo3yOpiMUlbd/dUW3mbkXHwoO88z5S8xPPgsHTooKdNFRFFgqgAD0npmLLkeStmnHHVaMxESZQREQDjeZvPFj8yoUBerVRB+JgPY8ZFcx6SsBSuEL1m/ApC/zNYek6mKr0jl3M+2Te8XlR4rpYrE/u8Oij8bMx/wAtp68o6UrsFxFEKp+3TJO74lTy8pR8fIlton+aN62WDmmb0MKoevUVATYbx4m17AczInj+kvCrcUkeoe8jdX319p6ukGguJwDVUIYJu1VYagr9oj8pMp1JXj4JtbojnzVL1JNsb0g4ypogSkPAbzerae0jWaZjXrg9ZVd9D8TG3Du4SS7N7Evi6a12rKiPewVSz6Egg3sAdJI6mxmBoqAxLudBvuBfyVbSlXhncyvJKYy01VPwV5kdc/saIOdVwflr+om8wFA1GRAQCzBbngLmaDJKJC4mh9qjW3gOe7qp/wBIm4otoDOcD3L0e8lNVtk6o7JUQO27sfCyj0tM/wDxSmGVldrBgSrAG4Bva4tImuPrDTrH/nb+s7qWaYheFV/5ifrH48n2cfmw/MlmKZA8+w/V4hxyY7w/N/3vPdlG0z7wStYg6b9rEeduIndthQ+CoPFCfdf1nOGax5NV8nvKqc2Hc/Bo8DV3HR/usD8r6+0slTcXEq8GTnZ/MFqUwt+0o3SOenA+k75cb1RL/wA7Ipbh/wBnLabD79B+9bOPy8fa8rtpYm0GMSnRYEjeZSAOZJHd3SunM74e+r/s45+u6170S/YauSlRO5gw/MLf7ZEto8N1WIqLy3t4eTdr9ZKNg6Z/evy7K/MXP6ieLpAw1nSr95Sp811HsfaczSnO19lah1xU38EdyPMBhsQlVr7ouGtx3SpH1tJDmHSAdRRpfmc/7V/rIZUM54XLK9c2pUnbxA0/mOkteLG32sjiy5EusnPNNpMXXB3qzAfdTsL7a+859JeM6zD4dhxfdb/Jr7mbvA9H1VhvV3CD7qdpvXgPeRjbOipxWFwSElU3RqbmxbmfJTMnIrG0lBv405E27O7L9hcVWc7m4iaWdm5EAmyjXjf0li7G7JnL99jW3y4UFQu6oKk2I1JPEzZbP07IPKbm0lWaqXV+i84ZVdvkyBFpmJIqcbTNpmIAiIgCIiAIiIB81Z9hnpYirSYlijst2JJIv2dT4ETjlWVYjFP1dCmXYC5AKiwva5JIsJKulfL+rxgqAaVUDfmTst7bk1WwmaLhcbTd2CowZHJNgFZdCT5hZ9Wbbxdp+j51T++qNpT6MseVLlqSsBcJvEk+FwLAyHujIxVhZlJUg8QQbEH5iXNmvSNgKQIRmrMOApr2b+LNYW8rynMbiTVqPVIANR2cgcAXYtYes5wVkrbtHuWYnXVlp9GmJ/acHWwjm4QlBf7lRTp8iGla1KTU3am3FGKnzU2/SWZ0SZcyUaldhYVWUJ4qt7t5XJ9JEtv8F1OOqcg4WoPzaH3U+s5xUllqUMst402eTB55iqdPqUrMiXJ3VsNW49q1/ecKGMZKiVWZmKOGuxJJsddT4Tv2TwVLEYlKNXeCvvAbpsd4AkC/doZbOH2ewGFG8KSLb7b2Y+r3nubJMNzryyeLHVed+EVljT+y5qH+xiU+RY2/7fzSXjZmnUG/TfcvrukXX5cxI10l18LUQGlVVqiNvLua27xcaDkflO7A7UVGw9GpTfdbeIcaHVRqDflreYpVzWl42bcjip3XnRujsjW5On+b+k8mYZHWoLvtulbi5UnS+guCJ30trq4GqofGxH0M8eYZ5WrjdcgLe+6osNOF++ap/LvzrRiyLD1fXezxgyd4Kl+14NVY67tge5kNgfaQJbk2AuSbADiSeAll5LhTRopTb4gLn+I6mecmtJfezziQ6b360QCtTZGKMLMp1E4rUINwSD4G30lh5jlFLEDtr2hwYaMP6jwmifY430raeK6+xnUcqGv28EsnByTX6eURao5OpJJ7yb/WZw2GqVXFNFLE+g8SeQkvw+yFMfG7N4ABR/Wb7CYGnRXdRQo8OJ8zxM8vlSlqDvHwbb3b8HTk2Wrh6YQanix72PEzhneTri0VGYrusGutr8LEa+c2lpkTD2fbtvyfU6T1668GiwWzGEpaimGP3n7R99B6TcogGgAA7gLTnBh1T9vYmJnwlo8eZ1xTQkmwAJlKbPXxmYVMUdVUkL8+yvsCfnJf0qbQdVR6hD26l104heDH3t8509H2S9VTUEdpu03meXyFhPDssLLKW6gnunCktgBOcAREQBERAEREAREQBERAK86XcBv4ZK1taTgE/hfsn33ZTs+jtpsB+04WtR5vTYD+IC6+4E+ctef998+hxK3Ln6MXInVbPYuU4k0zX6l+rUXL7p3bHnfmJ5Bx/u0uroyxYr4Bab2bq2emwOoK3uoIPLda3ykC272TbAv1lME0Hbsn/wDNjruHw7j8p3GfduK9nNYtSqRZGw20tLGURTCqlSmoVqY0FhoGUfdPtND0t4K60cQBwLU2Pg3aX3DesrXKcZWo1UqUCesU3G6CxPeCo4g8xLkx1CpmuXlTSalVbdISoCtnRgbgkX3Trr4yFwsORUn4KJvJDl+yocNXdGV0Yqym6sOIPeJ6q+LqVTvVHdz3uxP14Sa5d0YPoa+IA/DTXX+Zv6SU5fsPgaNj1e+RzqHe9uHtK1ycafjyQnjZH49FPphXq9lEZz3KpP0nRRoVME4SujJTqnibdhh9q3hfUcx5T6Gp4dFXdRFUdwAA9pE9rMgTEIyMNCOI4g8iPETLkz9/KWjViwKVpveyO4bZ6s4DI6ODqDvW09J78PslXb43RR4EsfSw+siuz+d1crq/smJJ6u/7t9bAf9P08pa+DxaVFDKQQRcEG8fnsfxce/R5soyClhzvC7v99uX8I5TdLOlTOxTJVTp7ZaZmFqUdyzmFnWpnYDOTozuzIExeZEACZiYMAGajaDOKeEpNUdgAo9TyAnPOs4o4Sm1Wo4VQOZ4+A8ZUbHFbQYk23kwtM6tY28h3uRy5DUwDx5SlTM8U2MqjsBuwp4XBuq/LifGXHkuD3FEr+rlr5dUFSkhNMWDJ3gc1/F9ZY2TZhTr01qU2BUj/ANgjkR3QDaRMAzMAREQBERAEREAREQBERAOBlFZxsdjGxdZKGHZk6wlX0VN1u0O0xA+1y7pe9pi0piy1jbaJ3jV+yDdHezOKwAqdcybr7pCqSSGW4uTa3A8u6THG4OnWRqdRQ6MLFWFwRPRaZnNU6rs/Z1MpLSPFgssoUBu0qSIPwqB7z2WmZmcvz7PdGJmIg9E6a9IMLGd0QCC7T7M066FWW44gjip71PIyAYbF43KHsb1cPf5qP9v08pelWkGFiJoM0yRXBsOMA12z21uGxajccb1tUOjDzEklOqDKpznYhN7rKRak/et92/ly+U8VDMs4wen+Og+Z09G9jALpVp2BpUuG6UCnZrYd1PO3/labKn0p4PmHH5f6QCylacwZWdTpXwg+FKjflA+pmsxHSliKmmHwzE97XP8ApvALcqVlUXJAHiZCtqOkTC4UFKbdZU+6vAH8R4CQDEvm+O/xqhpofsg208l19TNtkexdOmQ26Xf7z8vIcBAI/iDi8ycVsUXWle4RdDu/hB4acz8pb+z/AOzigiYdVVFAso5d5PefEzz4fZ4Fe0JrqmHqYJ+sQEoT2l/UeMAkWMwi1FIIkIxdR8qc11P7okb6X0N9AU/H9bektxWe4elQOKdwEA+ZPJFHNjwtKO2r2mq5hV6xuyi6U6d9FHe3ex5n5QC2NmukjD4ur1Do1Jj8Bcgh/wANx8LeEnaODPlFW/sS2+jzbvf3cJiW7fCm5+33K34/r5wC1onWjgidkAREQBERAEREAREQBExMwBERAEREAREQBERAEwRMxAPLXwavxE1GKyFW4CSGIBCcRs5fioPmAfrNbU2RpnjRQ/kX+kscicdwd0ArulsnTHCkg8kX+k2WH2dI5WHgLSZbg7pmwgGgwuQKvETb0MGicBPVEAwBPFj8Krqbie6cSLwD586RcLVp1wp3uqIugud3f13tOG9a0iM+gtrMgXEIystwR/ZHjKPzvJ6mEcqwJUnst3+B7jANbOQP993lOEzALd6PNu+s3cJiW7egpuT8f4W/H9ZaSNcT5SBltdHm3e/u4TEt2+FNyfj7lb8fjzgFrxOtHBE7IAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAddSmGFjIdtTs2lZGBW4P9+sms66lMMLGAfMOdZPUwjlWBKk9lv0PjNbL/2p2bSsjAqCDKTzvJ3wj7rAlSey36HxgGtnIGcJmAW30ebd7+7hMS3b4U3P2+5WP3vHn5y1UcHWfKIMtno827393CYlu3wRz9vuVvxePPzgFsROum4InZAEREAREQBExMwBERAEREAREQBERAEREAREQBERAEREAREQBERAEREA66lMMLGQ7anZtKyMCoIP9+smk8uN+EwD5pzvJ6mEfda5U/C36Hxmtlm9In+G3mv1lbwDqvOQM5zkIBafR3t3v7uExLdvQU3J+PuVj97x5y1abhhPlpOK/wAQ+s+m8s+AeQgHuiIgCIiAf//Z"
  const voteimg="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBcVFRgVFRQSEhQZFRISGhgaEhIYEhoVGBgaGRgVGRwcIS4lHB4rIRgcJjgmKy8xNTY1HCU7QDs0Py40NTEBDAwMEA8QHxISHjYrIys0NDQxNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABAECAwUGBwj/xAA8EAACAQICBgcGBQQCAwEAAAAAAQIDEQQhBQYSMUFRExRhcYGRoSIyUmKxwSNCktHhB0Oi8CRyM7LxFf/EABoBAQACAwEAAAAAAAAAAAAAAAABBAIDBQb/xAAxEQACAQMCAgcIAgMAAAAAAAAAAQIDBBESITGxBRMyUWGRoSJBQnGBwdHwM/EUI0P/2gAMAwEAAhEDEQA/AOWABwz0IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeWbyXPgazG6ZhDKH4ku/2V48TOEJTeIoxnUjTWZPBspSSV20lz4Gqxmm4xyh7Uuf5V+7NJi8dOo/aeXJZR8iJcvU7RLeW5zqt7J7Q25krE42dT35N9m6K8CKwC0klsik228tgAEkHeAA4Z6EAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgAAAAgY/Scab2bOU8nbcrPm/2Ox1J0fh69fo8Rtu62qcVLZjKcc3GXF5bkuTN3/VbVCEsHGrh6UYSw2bjFJXov3+9p2l3KRbt6Cn7UuBTurl03ojxPE8ZpCdT3pZcllH+SHcpYHQSSWEcuUnJ5bAAJIAM1DDym7Qi5PsN3hNBJZ1Hf5U8vFmE6kYdpm2nRnU7K/BpcPh5Tdoxcn2fc2tPQDazkk+STa8ze0qcYq0Uorkl/ty8pTu5N+ydCnZQS9vcAAplwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHQ6q6AeIntzuqMXnzm/gj2c3w3cSUskSaissgaG0LVxErQjaKbUqj/8AGuy/F9iO8wWqOGhFKUXVlbOU28+5KyS7DoKGEUILZjGEI2jGKSS7kgb1DTxKjquT2NLU1Vwr/sxXdKa+jIWI1Iw8vdlWp904yX+cW/U6gE4Q1S7zWaI0JSw+dOHt/HL2qjffwXdY6mm1OGdmpJpp5q25p9hqDXR1tw9KsqMpp3bUppro4NL88t3luN1Gag8e4r1oOayuJ4Xr5q68Di50Un0T/EpN8acm7K/Fp3Xh2nNHsP8AVPS1DHU4RoxlOrTneNRpRjsyspQSftNPJ3stx5/gtBL3qjv8q3eMixKvTS4mmNtVk8aTS0cPKbtGLk+z99xusJoFLOpK/wAq+7NzTpRgrRiorkl/ty4p1LuT2jtzL9KyhHeW79C2lTUVaKUVySLgCq22XEAAQTgAAGIAAAAAAAAAAAAAAAAAAAAAAAAAKNgFQlmlxukuLu9yS4nRaA1Qr4m0tnoqXxzVrrjsR3y79x6ZoHVShhbSjF1KvGpOzn3R4RXd5linbTnu9kVqt1Cntxfh+f7OB0DqLWqpTrXw9JWlZp9NJb8k/d8ee47/AENoyEIRpwjs04qyXPO7bfFtts3yQSLkbeCxj+znzuZz4/0a3SMvdjuVr/Yi1IW2e2Kl5mfH5zt2RXr/ACW4xe1bkoryRqqbuT+hsp7KKNJp7S8cLTU3BzbmoKKaTd023muFjmp6+vhQXjU/aI/qLGd6Ls+j9qz4OfLv2U2cSVZyaZepU4yjlnQaS1txFWLgnGlB3TUL7TT4Ocs/Kxz7ANbbfE3xio8AACDIAAAAAAAAAAAGIAAABcqbe5N+DL40JPdF+TJSb9xDklxaMQM6wlT4JeTLlgZ8mvAzVKo+EX5Gt16S4zXmiMCV/wDnz5L9SLlo+Xy+bM1bVn8LNbvbZf8ASPmQwT1ox/FFeb+xdHRj4yXkzJWdd/Dy/JrfSNqvj9G+SNcDZx0avif6UXR0dH5vKJkrKt3eqMH0rar4n5M1QNhUwHwvz/gjzwUlwuuzcYTtasOMfLc207+2qdma+u3Mjgq4tb0yhXaxsW/EI7H+nVLDzryjWpxnVtGpScneOW9KLVtpZNP6HHGbC4iVOUZxezKMlOLzyks0+6+9cVdGdOeiSeDCpDXBxyfQyiXGq1f0vHFUYVY5NpqUeMZrKUX9V2G1OwmnujhNNPDAAJII8sPFy2nv9Miiwq2nJ53W4klGzHSu4nUzU6e0PHE0JUJWimrxfwTXuyXn6nhuJw8qc5QnHZnCThJcmj1zT+u9DDtwg+sVd2zBrYj/AN5cO5XZ5ZpjScsRVlWqbKlJJWjHZjZbu99pSunB8HudKyVRZz2Xz8CCACkdAAAAAAAAAAAAAAAGIAAB0mioqVJc1ePkZKlBrdn4si6AqXhKPzL/ACX7pm2PRW0tVGL8DxV/Dq7qpHxb89/ua19oNhOmnvRGnhmt2a9TdgrJowANAGaC8zNDCTe6Evp9TJhMY4cFJduXqZKmk5vdsx8L/UxZKx7ytPRU3v2Y+N/oXvR9OK9upbyX8kKeInLfKT8f2MEiCcruK14RT9me2u53MdyrZaZJECST3qLME8JF8NnuZIFjGVOEu0smdOtUpvMJNfJ4IEtH8pLubMEsJJcL9zublQfcXKl2lWVjSlw2+Rfp9LXMe1iXzX3WDNqLp3q1fo5u1GpaLvujK6Snnw4M9lueKyw8XlJRku1J9h3uomnusU3Tk/xKT2c3nKn+SffvT7u0xVPqcQcs54G//J/yczUcYxnfK34HXFGzV6Z03RwsdqtUUbp7MVnUk1wjFZv+d55tp/XyvWvCj/x6e6/92S7X+XwuYzrQhxZupUJ1Oytu877T2tVDCpqUtupbKnCzn3vhFd55np/XGvibw2uipO62IOzafCct8u7dv3nOt8Xm3m2823zb5goVLmc9lsjp0rSFPfi/H8C3DcuzJeCABXLQAAAAAAAAAAAAAAAAAMQAADbav1LSkuab8v8A6zfnL6HqWqx7fZ8729bHUHbsJZo47mzynTMNNzq74r025YKAAvHKLZU096v9SPPCv8ufZxJQIGTXNW35FDYygnvVyPKgk+YaM1IjXKST5MlbC5FsyME6iPGmy5UlzMoJGS1U0XJAAgAAAxV52jJ8otmm0fjqlCp0lKTpzSlG65ONmrPJ8+9I2OlZ2hbnJL7s0hyOkJ/7El7lzPS9C0l1EpP4n6L9ZkxFaU5OUpSqTeblKTcm+9mMA5x2ksAAAAAAAAAAAAAAAAAAAAAAAAxBRlSjAMuHnsyjL4XGXlJP7HYo4qJ2GFntRjLnFP0Or0bLtR+TOB07DanP5rkzIADqHngAAAWVPsXllUBGK5Y95ejEyDJFQU/3n9DJSoynlCM5v5Yyl/6pgksBuMPqxiZfk6Nc5yS9Fdm2w+pT/uVvCELv9Utxi6kUbY0KkvccgVR6NhtVsNDfB1LfHJtd+zkjiNObPT1VGKjGM3BJJJezaO5dqZEZqTwialB045bOb0xPNR5JvzyNYSdIzvUfZaPlv9bkY4NzPXVk/HkeusKfV20I+GfPf7gAGgtgAAAAAAAAAAAAAAAAAAAAAAAxBRlSjAFzp9DTvSj2XX3+jOYN/q/P2ZR5SUvS32ResJYq470zldMw1Wue5p819zbAA7Z5QAAAFtVbi4tq7gEStE6HniHJRcI7NruTfHsSz3M6DC6lw/uVZSfFRior1u/oYdRX7VVfLTfrI63EV4wi5zlGEIpylKUkopLi29xXnNp4R0rahCUFJo1uG1dw8M1SjJ85tzfrl6G0hFRyikl2JL6Gj0zrVRw9OjU9qvGvOFOn0ezJS2lfbveyilnc5HXvXbFUZ1I4KNNQw0aMq85RUpbdSSUacYt5e9G/HN8jVxLijGPBHpVWqopyk4xir3k2lFeLyOd05rphcKoOc5VZVIuUIUo9JOaTa9mz2d6tm+ByuveiljK+jVOc1072ZUU7QVOMVUqy53u4rsViXq2ox0tXp0sPKVChRpYOFS66OnGEduUc1nJzm14Ak9Fo1LxUrNXSlZ71dXs+08ixdW85zfxVKn+Upfc9Zx1XYpzl8MJS8keN42ezTl/12fFpI2RemMpdxUuY9ZOFNe982kaCpK7b5tvzLQDz+cs9aklsgAASAAAAAAAAAAAAAAAAAAAAAAQeklzY6SXNmeg1a0TijIXSS5sr0sviY6tjrETEbbV+dptc4S801+5z3Sy5snaExDVaN3k2153X1sb7daasX4la9xUtqkV3P03+x2RUtuLnfPFFwLLi4JLzHU3FblstwB0eor9uovli/KX8m116w3SaOxcErvoKk0uN4LbVv0mm1Il+PNc6bfk4nZ4qkpwnB7pQnDsalFq3qVanaOtafxL68zxjV2fWpaJw6d406VetJd0+iT84NF2PfS9c519M0sOlbOUaLUpJc7WJv9G9Xq1OtUrVqc4RjB0oOUJRVttuSjfg3mdjoXUGhh8TLEdJWqydSpWhCck6dOc77UorjKztd52RgWS2dLb0rRiotxwuCk1l7O3VkopJ7r2gX6laFxlCVSeIqUlCpUr1VShG8tupPa2pzfvWirJI7DZSzImM0lSpL8SpCHJOS2n3JZvyAbxxIutFXZwtZ84bH62o/c8h0vU9lR5yb8Ev5O41m1kp1qbpU4zacoNza2Y2jJSyW97jzbTmKe2o5ZRT8ZZsxuMxoPx2/fpk12zjVvYNbqOX+/XBHBF6y+SHWXyXqcfQz0imiUCL1l8l6jrL5L1Ghk60SgRetPkV6z2eo0MjWiSCN1js9SvWez1Ghk60SAR+tdnqOtdnqNDGtEgEfrPy+qHWvl9UNDGuJIBgWJ+V+aHWVy9RpY1ozgw9ZXJjrK5MaWNaMwMPWVyY6yuTGljUiKADaVwAAAZKFTZlGXKUZeUkwCc43GM7M74AHoXxPCw4IAAGQKS3eAABudSX/wAh9tOa8nFnfwiVBWq9o6tn/F9WRsbpKlSX4lSEOxu78t5zeN12gsqUJS+aXsR8s5fQAmnFNZZquLmcJaYnPY7WXEVcnUdOPwwSircr5t+ZqJO7bd23xe/xANywuBSnKUn7TyUOV0jUvUm/mkvBZIApXvZS8fsdfoZLXN+C/fQilADmHfAABIAAAKlAAVBQAFQUBIKgAgZAABABQAH/2Q=="
    const navigate = useNavigate();
    const handleButton=()=>{
        navigate('/poll')


    }
    const handleresult=()=>{
      navigate('/final-results')
    }
    const handleresults=()=>{
      navigate('/feedback')
    }
   const hangleLogout=()=>{
    navigate('/login')
   }
   const handleadlist=()=>{
    navigate("/AdminList")
   }
   const hanuseli=()=>{
    navigate("/student-list")
   }
  const handleresulte=()=>{
    navigate("/results")
  }
  return (
    
  
  
    <div class="container text-center">
    
       
            <ul className="nav justify-content-end" style={{marginTop:"10px",marginBottom:"10px"}}>
        <li className="nav-item" >
        <button type="button" onClick={hangleLogout} class="btn btn-danger" >Log Out</button>
        </li>
       
      </ul>
       
  <div class="row">
    <div class="col">

    <div className="card" style={{width: '336px',height:"400px"}}>
        <img src={voteimg} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">POLLS</h5>
          <p className="card-text">Click Here to open Voting portal</p>
          <button onClick={handleButton}  class="btn btn-primary">polls</button>
        </div>
      </div>
    </div>
    <div class="col">
    <div className="card" style={{width: '336px',height:"400px"}}>
        <img src={qimg} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Results</h5>
          <p className="card-text">Feedback and queries of User </p>
          <button onClick={handleresults}  class="btn btn-primary">feedbacks</button>
      
        </div>
      </div>
    </div>
    <div class="col">
    <div className="card" style={{width: '336px',height:"400px"}}>
        <img src={resimg}className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Results</h5>
          <p className="card-text">Click here to view Runtime Results,Only Admin can view it</p>
          <button onClick={handleresult}  class="btn btn-danger">results</button>
          
        </div>
      </div>
    </div>
  </div>
  <div class="row" style={{paddingTop:"10px"}}>
    <div class="col">
    <div className="card" style={{width: '336px',height:"400px"}}>
        <img src={dcimg}className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Admin's</h5>
          <p className="card-text">Click here to view AdminList</p>
          <button onClick={handleadlist}  class="btn btn-danger">AdminList</button>
          
        </div>
      </div>
     
    </div>
    <div class="col">
    <div className="card" style={{width: '336px',height:"400px"}}>
        <img src={dcimg}className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">User's</h5>
          <p className="card-text">Click here to view UserList</p>
          <button onClick={hanuseli}  class="btn btn-danger">UserList</button>
          
        </div>
      </div>
    </div>
    <div class="col">
    <div className="card" style={{width: '336px',height:"400px"}}>
        <img src={resimg}className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">User's</h5>
          <p className="card-text">Click Here to View Results </p>
          <button onClick={handleresulte}  class="btn btn-primary">results</button>
          
        </div>
      </div>
    </div>
  </div>
</div>
 
    
  )
}
