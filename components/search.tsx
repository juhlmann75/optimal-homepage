import {Label, TextInput, Button} from "flowbite-react";
import {useState} from "react";

export default function Search() {

    const [searchText, setSearchText] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        window.open('https://www.google.com/search?q=' + searchText, '_blank')
        setSearchText('');
    }

    return (
        <form className="flex flex-col mb-6 max-w-2xl mx-auto"
              autoComplete="off"
              onSubmit={handleSubmit}>
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="search"
                        value="Google"
                    />
                </div>
                <TextInput
                    id="search"
                    type="text"
                    sizing="lg"
                    name="q"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
            </div>
            <div className="text-center mx-auto mt-3">
                <Button type="submit">
                    Search
                </Button>
            </div>
        </form>
    )
}