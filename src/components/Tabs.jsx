import getHolidays from '../functions/ getHolidays'

export default function Tabs({
    activeTab,
    bankHolidays,
    countries,
    setActiveTab,
    setSelectedCountry
}) {
    const allTabClasses = 'tab'
    const activeTabClasses = `${allTabClasses} tab--active`
    const genericTabClasses = `${allTabClasses} tab--generic`

    function handleClick(countryName) {
        setActiveTab(countryName)
        getHolidays(bankHolidays, countryName, setSelectedCountry)
    }
    
    const countryNames = countries.map((countryName, i) => {
        let slug = countryName.toLowerCase().replace(/\s/g, '-')

        return (
            <li
                key={i}
                className="w-1/3"
                data-country={countryName}
                role="presentation"
            >
                <button
                    onClick={() => handleClick(countryName)}
                    className={activeTab === countryName ?
                        activeTabClasses :
                        genericTabClasses
                    }
                    id={`tab-${slug}`}
                    role="tab"
                    aria-setsize="3"
                    aria-posinset={i + 1}
                    tabIndex={activeTab === countryName ? `0` : `-1`}
                    aria-controls={slug}
                    aria-selected={activeTab === countryName ? `true` : `false`}
                >
                    {countryName}
                </button>
            </li>
        )
    })

    return <ul className="tab-list" role="tablist">{countryNames}</ul>
}
