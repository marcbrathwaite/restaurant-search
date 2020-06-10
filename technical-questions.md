# Technical Questions

**1.	How long did you spend on the coding assignment? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.**

I spend around 2.5 days on this assignment. If I had more time I would:
- implement a better pagination solution
- add more tests

**2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.**

React Hooks for management of state and effects in functional components.
Sample Code
```
  const [data, setdata = useState(null)
  useEffect(() => {
    const asyncFn = async () => {
      const res = await api.getData()
      setData(res)
    }
  }, [])
```

**3.	How would you track down a performance issue in production? Have you ever had to do this?**

1. I would first try to replicate the issue in production, to get as much details on the issue as possible
2. Then I would try to replicate the issue on my local machine
3. We can use the lighthouse tab on the dev tools to perform a performance audit. The Performance and profiler tabs to analyze rendering times of the components. Also, we can look at the network tab to analyze network service calls.

**4.	How would you improve the API that you just used?**
Not sure.

**5.	Please describe yourself using JSON.**
{
  "name": "Marc Brathwaite",
  "lives": "Toronto",
  "strengths": ["fast learner", "good problem solver"],
  "weaknesses": ["could be better with documentation"],
  "hobbies": ["bootcamp workouts", "cooking"]
}